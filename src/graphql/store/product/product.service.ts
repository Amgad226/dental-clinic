import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginatorService } from 'src/pagination/PaginatorService';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create({ name }: CreateProductInput) {
    const product = await this.prisma.product.create({
      data: { name: name },
    });
    return product;
  }

  async findAll(page: any, item_per_page: any, search?: string) {
    return await PaginatorService({
      Modal: this.prisma.product,
      item_per_page,
      page,
      search,
    });
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id: id },
    });
    return product;
  }

  async update(id: number, { name }: UpdateProductInput) {
    const updateProduct = await this.prisma.product.update({
      where: { id: id },
      data: { name: name },
    });
    return updateProduct;
  }

  async remove(id: number) {
    return await this.prisma.product.delete({
      where: { id: id },
    });
  }

  async getProducts(): Promise<{ product_id : number ;name: string; totalQuantity: number }[]> {
    const products = await this.prisma.product.findMany({
      include: {
        storedproducts: true,
      },
    });
    const productsWithQuantities = await Promise.all(
      products.map(async (product) => {
        const totalQuantity = await this.getTotalQuantity(product.id);
        return {
          product_id:product.id,
          name: product.name,
          totalQuantity: totalQuantity,
        };
      })
    );
    return productsWithQuantities;
  }
  async getTotalQuantity(productId: number) {
    const storedProduct = await this.prisma.storedProduct.findFirst({
      where: { product_id:productId },
    });
    return storedProduct.total_quantity;
  }
}
