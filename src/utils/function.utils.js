
export function avtWithTypeLogin(data) {
    switch (data.type) {
        case 'facebook':
            return 'https://graph.facebook.com/' + data.id + '/picture?height=120';
        case 'google':
            return data.photo
        default:
            return ''
    }
}