function paginate(data, page, perPage) {
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedData = data.slice(startIndex, endIndex);
  return paginatedData;
}

module.exports = {
  paginate,
};
