// export const Add = 'ADD';
// export const REMOVE = 'REMOVE';
export function add(title, content) {
    console.log('action', title, content);

    return {
        type: "Add",
        title: title,
        content: content
    }
}

export function remove(id) {
    return {
        type: "REMOVE",
        id: id,
    }
}