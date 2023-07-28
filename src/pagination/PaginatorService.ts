import { default_item_per_page, default_page } from 'src/constant';
// TODO edit function to accept multi relation names and inner relation 
export async function PaginatorService(
  Modal: any,
  page: number = default_page,
  item_per_page: number = default_item_per_page,
  relation = false,
  relations?: string,
): Promise<{
  data: any;
  totalPages: number;
  page: number;
  item_per_page: number;
}> {
  if (page > 0) page--;
  const skip = page * item_per_page;

  let data: any;
  if (relation == false) {
    data = await Modal.findMany({
      take: item_per_page,
      skip,
    });
  } else {
    data = await Modal.findMany({
      take: item_per_page,
      skip,
      include: {
        [relations]: true,
      },
    });
  }

  const totalItems = await Modal.count();
  const totalPages = Math.ceil(totalItems / item_per_page);
  return {
    data,
    totalPages,
    page: ++page,
    item_per_page,
  };
}
