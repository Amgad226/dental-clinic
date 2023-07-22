import { default_item_per_page, default_page } from 'src/constant';

export async function PaginatorService(
  Modal: any,
  page: number =default_page,
  item_per_page: number=default_item_per_page,
): Promise<{ data: any; totalPages: number,page:number,item_per_page:number }> {
  if (page > 0 ) page--;
  const skip = page * item_per_page;

  const data = await Modal.findMany({
    take: item_per_page,
    skip,
  });

  const totalItems = await Modal.count();
  const totalPages = Math.ceil(totalItems / item_per_page);
  return {
    data,
    totalPages: totalPages,
    page:++page,
    item_per_page,

  };
}
