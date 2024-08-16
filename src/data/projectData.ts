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
    description:
      'An electronic signature web application, built with Vue 3 and .NET Core, enabling users to seamlessly share and collaborate on documents.',
    image: '/assets/eSign.png',
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
      'A document editing application, built with Vue 3 and .NET Core, that empowers users to edit, share, and collaborate on legal documents. The application also supports importing Word documents and PDFs converting them to an editable format',
    image: '/assets/ae.png',
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
      'Developed with Python and the Locust framework, this application performs stress testing on endpoints, offering valuable insights into potential vulnerabilities.',
    image: '/assets/stress_testing.jpg',
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
      'A light weight web application built with Vue 3, designed to calculate and analyze returns on investments for dividend-focused investors.',
    image: '/assets/dividend_calculator.jpg',
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
    image: '/assets/CitrusNetwork.jpg',
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
      'An automated workflow developed with FME that extracts, transforms, and aggregates data from more than 10 diverse sources, which is then used in data visualizations to provide actionable insights',
    image: '/assets/etl.jpg',
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
    image: '/assets/house.jpg',
    tags: [
      { title: 'Selenium', showTag: true },
      { title: 'Python', showTag: true },
      { title: 'SQL', showTag: true },
      { title: 'Tableau', showTag: true }
    ],
    index: 5
  }
]
