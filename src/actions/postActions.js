
export const getSubjectDetails = () => {
    return dispatch => {
        fetch('https://api.stag.talentscreen.io/v1/lookup/currencies?limit=100')
            .then(response => {
                response.json().then(res => {
                    dispatch({
                        type: "GET_SUBJECTS",
                        payload: res
                    })
                })
            })
    }
}

export const getCurrencyDetails2 = (res) => {
    return {
        type: "GET_CURRENCIES",
        payload: res
    }
}