import React from "react";
import moment from "moment";

export const purchaseHistory = (history) => {
	return (
		<div className="card mb-5">
			<h3 className="card-header">Purchase history</h3>
			<ul className="list-group">
				<li className="list-group-item">
					{history.map((h, i) => {
						return (
							<div>
								<hr />
								{h.products.map((p, i) => {
									return (
										<div key={i}>
											<h6>Product name: {p.name}</h6>
											<h6>Product price: ${p.price}</h6>
										</div>
									);
								})}
								<h6>Purchased date: {moment(h.createdAt).fromNow()}</h6>
							</div>
						);
					})}
				</li>
			</ul>
		</div>
	);
};
