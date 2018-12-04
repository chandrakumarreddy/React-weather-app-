import React from "react";
import {
	Sparklines,
	SparklinesLine,
	SparklinesReferenceLine
} from "react-sparklines";
import _ from "lodash";

const average = data => _.round(_.sum(data) / data.length);

const chart = ({ data, color, units }) => {
	return (
		<div>
			<Sparklines data={data} height={120} width={180}>
				<SparklinesLine color={color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>
				{average(data)} {units}
			</div>
		</div>
	);
};

export default chart;
