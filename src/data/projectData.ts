export type projectCardData = {
  title: string
  description: string
  image: string
  // tags can be optional for now
  tags: TagDto[]
  index: number
}

export type TagDto = {
  title: string
  showTag: boolean
}

export const projectList: projectCardData[] = [
  {
    title: 'LawDepot eSign',
    description: 'An electronic signature web application built using Vue3 and .NET 6',
    image: '/portfolio/assets/eSign.png',
    tags: [
      { title: 'Vue 3', showTag: true },
      { title: '.Net 6', showTag: true },
      { title: 'Web Development', showTag: true },
      { title: 'Backend Development', showTag: true },
      { title: 'API Development', showTag: true },
      { title: 'Mobile Development', showTag: true },
      { title: 'JavaSript', showTag: true },
      { title: 'TypeScript', showTag: true },
      { title: 'C#', showTag: true },
      { title: 'Responsive Web Design', showTag: true },
      { title: 'API Development', showTag: true },
      { title: 'Mobile Development', showTag: true }
    ],
    index: 0
  },
  {
    title: 'LawDepot Advanced Editor',
    description:
      'A document editing application that allows users to edit and share their legal documents. Also allows users to import / export word documents and pdfs',
    image: '/portfolio/assets/ae.png',
    tags: [
      { title: 'Vue 3', showTag: true },
      { title: '.Net 6', showTag: true },
      { title: 'Web Development', showTag: true },
      { title: 'Backend Development', showTag: true },
      { title: 'API Development', showTag: true },
      { title: 'Mobile Development', showTag: true },
      { title: 'JavaSript', showTag: true },
      { title: 'TypeScript', showTag: true },
      { title: 'C#', showTag: true },
      { title: 'Responsive Web Design', showTag: true },
      { title: 'API Development', showTag: true },
      { title: 'Mobile Development', showTag: true }
    ],
    index: 1
  },
  {
    title: 'Stress Testing Application',
    description:
      'Built using Python and the Locust framework this application stress tests endpoints and provides insights to any vulnerabilities',
    image: '/portfolio/assets/stress_testing.jpg',
    tags: [
      { title: 'Python', showTag: true },
      { title: 'Locust', showTag: true },
      { title: 'Stress Testing', showTag: true }
    ],
    index: 2
  },
  {
    title: 'Dividend Calculator',
    description:
      'A web application built using Vue3 dedicated to figuring out returns on money invested for dividend focused investors',
    image: '/portfolio/assets/dividend_calculator.jpg',
    tags: [
      { title: '.Net 6', showTag: true },
      { title: 'JavaSript', showTag: true },
      { title: 'TypeScript', showTag: true }
    ],
    index: 3
  },
  {
    title: 'Citrus Network',
    description:
      'A social media website dedicated built using Django and React, dedicated to keeping information private while letting you connect with friends',
    image: '/portfolio/assets/CitrusNetwork.jpg',
    tags: [
      { title: 'React', showTag: true },
      { title: 'TypeScript', showTag: true },
      { title: 'Python', showTag: true },
      { title: 'Django', showTag: true },
      { title: 'Design', showTag: true }
    ],
    index: 4
  },
  {
    title: 'ETL - City of Edmonton',
    description:
      'An automated workflow built using FME that extracts, transforms and aggregates data from over 10 different sources',
    image: '/portfolio/assets/etl.jpg',
    tags: [
      { title: 'FME', showTag: true },
      { title: 'Python', showTag: true },
      { title: 'SQL', showTag: true },
      { title: 'Tableau', showTag: true }
    ],
    index: 5
  },
  {
    title: 'Property Scroller',
    description:
      'A project built with Python and Selenium that gathers housing data from different sources and stores it',
    image: '/portfolio/assets/etl.jpg',
    tags: [
      { title: 'Selenium', showTag: true },
      { title: 'Python', showTag: true },
      { title: 'SQL', showTag: true },
      { title: 'Tableau', showTag: true }
    ],
    index: 5
  }
]
