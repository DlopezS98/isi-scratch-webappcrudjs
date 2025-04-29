function createDataTable(containerId, columns, rows) {
	const container = document.getElementById(containerId);
	const table = document.createElement("table");

	// Create table header
	const thead = document.createElement("thead");
	const headerRow = document.createElement("tr");
	columns.forEach((column) => {
		headerRow.innerHTML += `<th>${column.header}</th>`;
	});
	thead.appendChild(headerRow);

	// Create table body
	const tbody = document.createElement("tbody");
	const getCellValue = (row, column) => {
		const value = row[column.field];
		if (column.type === "date") {
			return value.toLocaleDateString("en-US", {
				weekday: "long",
				year: "numeric",
				month: "short",
				day: "numeric",
			});
		}
		return value;
	};

	rows.forEach((row) => {
		const tr = document.createElement("tr");
		columns.forEach((column) => {
			if (column.cellTemplate) {
				const CellTemplate = column.cellTemplate;
				const cell = document.createElement("td");
				const cellContent = CellTemplate({
					row,
					column,
					value: getCellValue(row, column),
				});
                if (cellContent instanceof HTMLElement) {
                    cell.appendChild(cellContent);
                } else if (typeof cellContent === "string") {
                    cell.innerHTML = cellContent;
                }

                tr.appendChild(cell);
			} else {
                const cell = document.createElement("td");
                const value = getCellValue(row, column);
                cell.innerHTML = value;
                tr.appendChild(cell);
            }
		});
		tbody.appendChild(tr);
	});

    // Append header and body to table
    table.appendChild(thead);
    table.appendChild(tbody);
    // Append table to container
    container.appendChild(table);
}
