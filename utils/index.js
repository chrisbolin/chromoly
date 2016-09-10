export const filterPages = (pages) => {
  return pages.filter((page) => {
    return page.path !== "/" && page.path !== "/404.html";
  });
};
