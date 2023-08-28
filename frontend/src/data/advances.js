import { createResource } from "frappe-ui"
import { getEmployee } from "./employee"

const transformAdvanceData = (data) => {
	return data.map((claim) => {
		claim.doctype = "Employee Advance"
		return claim
	})
}

export const advanceBalance = createResource({
	url: "hrms.api.get_employee_advance_balance",
	params: {
		employee: getEmployee().name,
	},
	auto: true,
	transform(data) {
		return transformAdvanceData(data)
	},
})