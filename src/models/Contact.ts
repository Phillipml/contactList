class Contact {
  id: number
  fullName: string
  email: string
  phone: string
  favorite: boolean

  constructor(
    id: number,
    fullName: string,
    email: string,
    phone: string,
    favorite: boolean = false
  ) {
    this.id = id
    this.fullName = fullName
    this.email = email
    this.phone = phone
    this.favorite = favorite
  }
}

export default Contact
