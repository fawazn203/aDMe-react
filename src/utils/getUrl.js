const getUrl = filename => {
    return `${process.env.PUBLIC_URL}/${filename}`
}

export default getUrl;