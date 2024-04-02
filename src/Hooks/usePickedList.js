const usePickedList = (list) => {
    return list.sort(() => Math.random() - Math.random()).slice(0, 2)
}

export default usePickedList