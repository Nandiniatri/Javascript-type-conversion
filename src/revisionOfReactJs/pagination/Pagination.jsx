import axios from "axios";
import React, { useEffect, useState } from "react";

const PaginatedList = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchData = async (pageNumber) => {
        try {
            const response = await axios.get(`https://reqres.in/api/users?page=${pageNumber}`);
            setData(response.data.data);
            setTotalPages(response.data.total_pages);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    useEffect(() => {
        fetchData(page);
    }, [page]);

    const handleNext = () => {
        if (page < totalPages) setPage(page + 1);
    };

    const handlePrevious = () => {
        if (page > 1) setPage(page - 1);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Paginated API List</h2>
            {data.map((user) => (
                <div key={user.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
                    <p><strong>{user.first_name} {user.last_name}</strong></p>
                    <img src={user.avatar} alt={user.first_name} width="50" />
                </div>
            ))}

            <div style={{ marginTop: "20px" }}>
                <button onClick={handlePrevious} disabled={page === 1}>
                    Previous
                </button>
                <span style={{ margin: "0 10px" }}>Page {page} of {totalPages}</span>
                <button onClick={handleNext} disabled={page === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default PaginatedList;
