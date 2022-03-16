export const formToQuery = (form) => {
  let query = "?"
  for (let key in form) {
    if (key == "category_id" || key == "prefecture_id") {
      if (form[key] !== "0") {query += `${key}=${form[key]}&`}
    } else {
      if (form[key] !== "") {query += `${key}=${form[key]}&`}
    }
  }
  return query.slice(0, -1)
}

export const queryToForm = (query) => {

  const getExistingValue = (params, key) => {
    if (params.has(key)) {
      return params.get(key)
    } else {
      if (key == "category_id" || key == "prefecture_id") {
        return "0"
      } else {
        return ""
      }
    }
  }

  const params = new URLSearchParams(query)
  const form = {
    name: getExistingValue(params, "name"),
    category_id: getExistingValue(params, "category_id"),
    prefecture_id: getExistingValue(params, "prefecture_id"),
    bid_date_from: getExistingValue(params, "bid_date_from"),
    bid_date_to: getExistingValue(params, "bid_date_to"),
    create_date_from: getExistingValue(params, "create_date_from"),
    create_date_to: getExistingValue(params, "create_date_to")
  }
  console.log(form)
  return form
}