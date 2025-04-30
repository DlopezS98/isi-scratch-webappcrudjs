function goCreateProduct() {
	const url = new URL(window.location);
	url.pathname = "/admin/products/create.html";
	window.location.href = url.toString();
}

async function createProductsTable() {
	const columns = [
		{
			title: "Name",
			field: "name",
			type: "text",
		},
		{
			title: "Brand",
			field: "brandId",
			type: "text",
			//   cellTemplate: BrandCell,
		},
		{
			title: "Category",
			field: "categoryId",
			type: "text",
			//   cellTemplate: CategoryCell,
		},
		{
			title: "Price",
			field: "unitPrice",
			type: "money",
			prefix: "$",
		},
		{
			title: "Created at",
			field: "createdAt",
			type: "date",
		},
		{
			title: "Actions",
			field: "actions",
			type: "actions",
			//   cellTemplate: (props) => <ActionsCell {...props} onRowDeleted={handleRowDeleted} />,
		},
	];

	const rows = [
		{
			name: "Product 1",
			brandId: "Brand A",
			categoryId: "Category X",
			unitPrice: 10.99,
			createdAt: new Date(),
		},
		{
			name: "Product 2",
			brandId: "Brand B",
			categoryId: "Category Y",
			unitPrice: 20.99,
			createdAt: new Date(),
		},
	];

	const url = "http://localhost:5005/api/producto";
	const token = localStorage.getItem("authToken") ?? "";
	const response = await fetch(url, {
		method: "GET",
		headers: { 
			"Content-Type": "application/json",
			Authorization: "Bearer " + token
		}
	});
	const productos = await response.json();
	console.log(productos);
    
	createDataTable("products-container", columns, rows);
}

createProductsTable();