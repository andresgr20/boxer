const createId = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let letters = "";

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * 27);
    letters += alphabet[randomIndex];
  }
  const numeric = Math.floor(Math.random() * (999 + 1));
  const paddedNumber = numeric.toString().padStart(3, "0");
  return letters + paddedNumber;
};

function createOrder(data) {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");

  return {
    id: createId(),
    created: `${year}-${month}-${day}`,
    status: data.status || "pending",
    customer: data.customer || "",
    sku: data.sku || "",
    photo: data.photo || "",
    condition: data.condition || "",
    size: data.size || "",
    type: data.type || "",
    origin_address: data.origin_address || "",
    shipping_address: data.shipping_address || "",
  };
}

function updateOrder(oldData, newData) {
  return { ...oldData, ...newData };
}

module.exports = {
  createOrder,
  updateOrder,
  createId,
};
