import { useEffect, useMemo, useState } from "react";

const LiveSearch = () => {
    const [query, setQuery] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then((data) => {
                setUsers(data);
                setLoading(false); // ✅ Move setLoading(false) inside .then()
            })
            .catch((error) => {
                console.error(error);
                setLoading(false); // ✅ Ensure loading state updates on error as well
            });
    }, []);

    const filterUsers = useMemo(() => {
        if (!query) return users;
        return users.filter((user) =>
            user.name.toLowerCase().includes(query.toLowerCase())
        );
    }, [query, users]);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div>
            <h1>Live SEARCH</h1>
            <input type="text" value={query} onChange={handleChange} />

            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {filterUsers.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LiveSearch;


