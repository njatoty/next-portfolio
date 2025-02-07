const publicData = {};

publicData.backend = {
    desires: ['Database Management', 'Web APIs (using frameworks like Express or Fastify from Nodejs)', 'Authentification Systems', 'and Real-time Applications'],
    languages: [
        {
            title: 'Javascript/Typescript',
            data: [
                {
                    title: 'JavaScript (Es6)',
                    note: 90,
                },
                {
                    title: 'JQuery',
                    note: 80,
                },
                {
                    title: 'TypeScript',
                    note: 70,
                },
                {
                    title: 'Nodejs',
                    note: 70,
                },
                {
                    title: 'Nextjs (13 and latest)',
                    note: 60
                },
            ]
        },
        {
            title: 'PHP',
            data: [
                {
                    title: 'PHP (7 and latest)',
                    note: 80
                },
                {
                    title: 'CodeIgniter 4',
                    note: 70
                },
            ]
        },
        {
            title: 'Open-source databases',
            data: [
                {
                    title: 'MySQL',
                    note: 60
                },
                {
                    title: 'Firebase',
                    note: 60
                },
                {
                    title: 'SQLite',
                    note: 60
                },
                {
                    title: 'MongoDB',
                    note: 60
                },
                {
                    title: 'MariaDB',
                    note: 60
                },
            ]
        }

    ],
    tools: [
        {
            title: 'IDE',
            data: ['Visual Studio Code', 'Atom']
        },
        {
            title: 'API tool',
            data: ['Postman']
        },
        {
            title: 'Code hosting & collaboration',
            data: ['Github']
        },
        {
            title: 'Web hosting',
            data: ['Heroku', 'Simafri', 'Vercel', 'Madagascar Internet']
        }
    ]
}


publicData.frontend = {
    desires: ['Website', 'User Interface (UI)', 'User Experience (UX)', 'Responsive Design', 'and Client requirements'],
    languages: [
        {
            title: 'Foundational technologies',
            data: [
                {
                    title: 'HTML',
                    note: 100,
                },
                {
                    title: 'CSS',
                    note: 90,
                }
            ]
        },
        {
            title: 'Frameworks',
            data: [
                {
                    title: 'Reactjs',
                    note: 70,
                },
                {
                    title: 'ReactNative',
                    note: 50,
                },
            ]

        }
    ],
    tools: [
        {
            title: 'CSS utility',
            data: ['Tailwindcss', 'Bootstrap']
        },
        {
            title: 'Others',
            data: ['Fontawesome', 'React-icons', 'Heroicons']
        },
    ]
}

publicData.work = [
    {
        title: 'QUIZ game',
        description: `Created a simple web application in which an user can play by answering questions on various topics.`,
        key: [
            "Developed a user-friendly interface",
            "Responsive design ensuring"
        ],
        techStack: ['Reactjs'],
        libraries: [],
        image: [`quiz.png`],
        github: ``,
        link: ``
    },
    {
        title: 'Stock management',
        description: `Created an web application for tracking, monitoring, and managing inventory or stock withing a business.`,
        key: [
            "Developed a user-friendly interface",
            "Responsive design ensuring"
        ],
        techStack: ['Nextjs', 'Prisma'],
        libraries: ['next-auth', 'xls-populate', 'framer-motion', 'react-icons'],
        image: ['fastinfo/1.png', 'fastinfo/2.png', 'fastinfo/3.png', 'fastinfo/4.png', 'fastinfo/5.png'],
        github: ``,
        link: ``
    },
    {
        title: 'Scheduler',
        description: `Created web application for managing time an making your timetable. This is similar to Outlook Calendar.`,
        key: [
            "Developed a user-friendly interface",
            "Responsive design ensuring"
        ],
        techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', ''],
        libraries: ['@toast-ui/calendar', 'axios'],
        image: [`uischeduler.jpeg`],
        github: ``,
        link: ``
    },

]

module.exports = publicData;