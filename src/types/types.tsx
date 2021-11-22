export interface Issue {
  id: string
  title: string
  body: string
  closed: boolean
  url: string
  number: number
  createdAt: string
  updatedAt: string
}

export const specialties = [
  "Scaffolding",
  "Earthmoving",
  "Electrical",
  "Project Engineering",
  "Plumbing",
  "Heating",
]

export type Specialty = typeof specialties[number]
