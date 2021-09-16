//to fetch data

export const fetchActions = () => {
    return {
        type : "FETCH_USER"
    }
}

//successfully fetched
export const sucessActions = (users) => {
  return {
    type: "SUCESS_USER",
    payload : users,
  };
};
//fetch failure

export const failureActions = (error) => {
  return {
    type: "FAILURE_USER",
    payload : error,
  };
};
