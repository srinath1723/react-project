const noteServices = {
    getNotes: async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const notes = await response.json();
        return notes;
    }
}

export default noteServices;