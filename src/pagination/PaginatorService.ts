import { default_item_per_page, default_page } from 'src/constant';
// TODO edit function to accept multi relation names and inner relation 
interface PaginatorProps<T> {
  Modal: any,
  page: number,
  item_per_page: number,
  relations?: T
}

export async function PaginatorService<T>(
  {
    Modal,
    item_per_page = default_item_per_page,
    page = default_page,
    relations,
  }: PaginatorProps<T>)
  : Promise<{
    data: any;
    totalPages: number;
    page: number;
    item_per_page: number;
  }> {

  if (page > 0) page--;
  const skip = page * item_per_page;
const {where , ...restprops} = relations as any

  const data = await Modal.findMany({ take: item_per_page, skip,where :{
    ...where,
    ...search
  } , ...restprops });

  const totalItems = await Modal.count();
  const totalPages = Math.ceil(totalItems / item_per_page);
  return {
    data,
    totalPages,
    page: ++page,
    item_per_page,
  };
}