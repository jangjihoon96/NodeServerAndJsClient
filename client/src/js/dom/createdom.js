export const createDom = (data) => {
  return `
      <li>${data.id}. ${data.title} : ${data.content}</li>
    `;
};
