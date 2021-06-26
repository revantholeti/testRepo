export interface users {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

export interface page {
    page:number,
    per_page:number,
    total:number,
    total_pages:number,
    data:users[],
    support:any
}
