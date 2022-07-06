
export const setBearerToken = (token) => localStorage.setItem("bearerToken", token);

export const getBearerToken = () => {
    return localStorage.getItem("bearerToken");
}

export const deleteBearerToken = ()=>{
    return localStorage.removeItem("bearerToken");
}

// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE4YTgyNzRkZjlmM2Q0NmZjYmY1NjAiLCJlbWFpbCI6ImFkbWluQGdldG5hZGEuY29tIiwiaWF0IjoxNjQ3NTc1NTIzLCJleHAiOjE2NDg0Mzk1MjN9.X78EqP9V4AOmunz9H6Adv8uwfLQq09_fYucbK-V4Jo8"
