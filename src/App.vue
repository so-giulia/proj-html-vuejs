<template>
  <div id="app">
    <Header :data="header"/>

    <Main :data="sections"/>

    <Footer :data="footer"/>
  </div>
</template>

<script>
// —————————————————— PROJECT —————————————————— //
//search for 'TO ADD:' at the end in every component

//MILESTONES
//1. sections (no slider) !!!INIT!!!  ----  + back to top
//2. jumbo + accordion + side menu component
//3. slider + interactions

import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components:{
    Header,
    Main,
    Footer
  },
  data(){
    return{
      header:[
        {
          headNav:[
            {txt: 'Home'},
            {txt: 'Pages'},
            {txt: 'Courses'},
            {txt: 'Features'},
            {txt: 'Blog'},
            {txt: 'Shop'}
          ]
        }
      ],
      footer:[
        {
          titles:[
            {title: 'Address'},
            {title: 'Explore'},
            {title: 'Information'}
          ],
          exploreNav:[
            {title: 'Explore', txt: 'Start here'},
            {txt: 'Blog'},
            {txt: 'About us'},
            {txt: 'Success story'},
            {txt: 'Courses'},
            {txt: 'Contact us'}
          ],
          infoNav:[
            {txt: 'Membership'},
            {txt: 'Purchase guide'},
            {txt: 'Privacy policy'},
            {txt: 'Terms of service'}
          ],
          companyAddress:[
            {
              address: '382 NE 191st St # 87349 Miami, FL 33179-3899',
              phone: '+1 (305) 547-9909',
              openings: '(9am - 5pm EST, Monday - Friday)',
              mail: 'support@maxcoach.com'
            }
          ],
          social:[
              {class: 'fa-facebook-square'},
              {class: 'fa-twitter'},
              {class: 'fa-instagram'},
              {class: 'fa-linkedin'}
          ],
          rights: '&copy; 2020 Maxcoach. All Rights Reserved.'
        }
      ],
      sections:{
        jumbo:[
          {
            title: 'Complete Your Dreams in JavaS Programming',
            paragraph: 'Learn any coding program in distance and for a reasonable fee. You don\'t have to struggle alone, you\'ve got our assistance and help.',
            cta: 'Download free E-book'
          }
        ],
        features:[
          {
            heading:'Build Your Dream',
            accent: 'Today',
            h3: 'START LEARNING CODING LANGUAGES',
            featInfo:[
              {
                img:'home-5-image-box-01.png',
                title: 'Idea Discussion',
                desc: 'Get teamed up with the specialists who work and teach coding for years at famous universities.'
              },
              {
                img:'home-5-image-box-02.png',
                title: 'Web Development',
                desc: 'Learn to start building a webpage from scratch. You decide your own pace, course and speed.'
              },
              {
                img:'home-5-image-box-03.png',
                title: 'System Administration',
                desc: 'Learners are encouraged to study the mechanism and structure of system administration.'
              },
              {
                img:'home-5-image-box-04.png',
                title: 'Graphic Design',
                desc: 'Have a passion for graphics and arts? Show your talents with confidence and self-assertiveness.'
              }
            ],
          }
        ],
        dream:[
          {
            heading:'Construct A',
            accent: 'Stunning',
            heading2: 'Career Perspective',
            h3: 'DREAM WITH',
            brandname: 'MAXCOACH',
            accordion:[
              {
                title: 'Multiple Platforms Supported for Teaching & Studying',
                content: 'MaxCoach supports the act of teaching and learning on multiple platforms like online or offline via material downloads. We know things aren’t supposed to be devoured in a short time, you can always access our knowledge base from any device.'
              },
              {
                title: 'Multiple Course Participation at the Same Time',
                content: 'Study for a number of courses at the same time is possible as long as you can afford the fee and time for completing them in the proper time. Learn at your own desired timeline and timetable. Maximum up to 5 course at a time for a learner at MaxCoach.'
              },
              {
                title: 'Track Study Progress & Deliver Prompt Feedback',
                content: 'It’s not just a normal thing to be able to build such a solid online educational system like MaxCoach where your progress is easily tracked and feedback is properly delivered. We promise to keep improving our system for better stability and flexibility.'
              }
            ]
          }
        ],
        numbers:[
          {
            number: '1.926',
            subject: 'FINISHED SESSIONS'
          },
          {
            number: '3.092+',
            subject: 'ENROLLED LEARNERS'
          },
          {
            number: '200',
            subject: 'ONLINE INSTRUCTORS'
          },
          {
            number: '100%',
            subject: 'SATISFACTION RATE'
          }
        ],
        courses:[
          {
            heading:'Latest Featured',
            accent: 'Courses',
            h3: 'CHOOSE WHERE YOU\'D LIKE TO BEGIN',
            coursesInfo:[
              {
                img_path: 'stock-full-hd-05-480x298.jpg',
                teacherImg_path: '73ee246daf47502812ccefc84bf02898.jpeg',
                price: 'Free',
                teacher: 'Owen Christ',
                name: 'Personal Finance: Financial Security Thinking & Principles',
                lessons: '2',
                students: '95'
              },
              {
                img_path: 'course-02-480x298.jpg',
                teacherImg_path: '73ee246daf47502812ccefc84bf02898.jpeg',
                price: '$40',
                teacher: 'Blanche Fields',
                name: 'Learning to Write as a Professional Author',
                lessons: '20',
                students: '50'
              },
              {
                img_path: 'stock-full-hd-03-480x298.jpg',
                teacherImg_path: '73ee246daf47502812ccefc84bf02898.jpeg',
                price: 'Free',
                teacher: 'Maggie Strickland',
                name: 'Customer-centric Info-Tech Strategies',
                lessons: '24',
                students: '821'
              },
              {
                img_path: 'stock-full-hd-04-480x298.jpg',
                teacherImg_path: '73ee246daf47502812ccefc84bf02898.jpeg',
                price: '$19',
                teacher: 'Maggie Strickland',
                name: 'Open Programming Courses for Everyone: Python',
                lessons: '17',
                students: '62'
              },
              {
                img_path: 'stock-full-hd-06-480x298.jpg',
                teacherImg_path: '73ee246daf47502812ccefc84bf02898.jpeg',
                price: '$26',
                teacher: 'Blanche Fields',
                name: 'Academic Listening and Note-taking',
                lessons: '14',
                students: '67'
              },
              {
                img_path: 'course-featured-image-01-480x298.jpg',
                teacherImg_path: '73ee246daf47502812ccefc84bf02898.jpeg',
                price: '$39',
                teacher: 'Blanche Fields',
                name: 'Master jQuery in a Short Period of Time',
                lessons: '6',
                students: '51'
              }
            ],
            cta: 'View all courses'
          }
        ],
        learn1:[
          {
            heading: 'Learn At Your Own',
            accent: 'Pace',
            h3: 'WHY HESITATE TO REGISTER?',
            list:[
              {tick: 'Select & customize courses to your preferences'},
              {tick: 'Change the tutor and make arrangements'},
              {tick: 'Participate in events to join others'},
              {tick: 'Get the desired certificate delivered at house'}
            ],
            img: 'home-5-image-01.png',
            underlay: 'underlay-shape-grey.svg',
            shape:'maxcoach-shape-05.png',
            cta:'Get started for free'
          }
        ],
        learn2:[
          {
            //TO ADD: outline circle svg ?? missing
            heading: 'Learn on your',
            accent: 'mobile',
            heading2: 'anytime!',
            h3: 'GET IN CONTACT NOW',
            desc:'Save lessons for later and revise or write notes at any time and on multiple devices on your way. Never interfere with activities of enjoyment or other precious moments.',
            img: 'home-5-image-02.png',
            underlay: 'underlay-shape-grey.svg',
            shape:'maxcoach-shape-07.png',
            lines:'maxcoach-shape-01.png',
            cta:'Download our app'
          }
        ],
        events:[
          {
            heading:'Upcoming',
            accent: 'Events',
            h3: 'GET IN CONTACT NOW',
            eventsInfo:[
              {
                city: 'Texas',
                state: 'US',
                name: 'Storytelling Workshop',
                day: '22',
                month: 'apr',
                btn: 'Get ticket'
              },
              {
                city: 'Hamburg',
                state: 'Germany',
                name: 'International Art Fair 2020',
                day: '23',
                month: 'nov',
                btn: 'Get ticket'
              },
              {
                city: 'Ilinois',
                state: 'US',
                name: 'Consumer Food Safety Education Conference',
                day: '22',
                month: 'jul',
                btn: 'Get ticket'
              },
              {
                city: 'New York',
                state: 'US',
                name: 'Painting Art Contest 2020',
                day: '10',
                month: 'oct',
                btn: 'Get ticket'
              },
              {
                city: 'Ilinois',
                state: 'US',
                name: 'Street Performance: Call for Artists',
                day: '15',
                month: 'dec',
                btn: 'Get ticket'
              },
              {
                city: 'Dubai',
                state: '',
                name: 'How meditation improve your mental health?',
                day: '12',
                month: 'aug',
                btn: 'Get ticket'
              }
            ],
            ctaText: 'Excited about our event?',
            cta: 'View all events'
          }
        ],
        reviews:[
          {
            heading:'What make they',
            accent: 'love us?',
            h3: 'PEOPLE ARE PRAISING MAXCOACH',
            testimonials:[
              // TO ADD: images
              {
                img: '',
                review: 'I am free to learn at my own pace, follow my own schedule and choose the subject I like. Great study portal for people like me.',
                name: 'Mina Hollace',
                occupation: 'Freelancer'
              },
              {
                img: '',
                review: 'MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
                name: 'Madley Pondor',
                occupation: 'IT Specialist'
              },
              {
                img: '',
                review: 'I am happy with their arrangement of lessons and subjects. They reflect a scientific investigation.',
                name: 'Luvic Dubble',
                occupation: 'Private Tutor'
              },
              {
                img: '',
                review: 'I am very strict person so I require everything to be organized and neat. MaxCoach guys just got me.',
                name: 'Florence Themes',
                occupation: 'Multimedia Admin'
              }
            ]
          }
        ],
        callToAction:[
          {
            subheading: 'Start today for getting',
            subheadingAccent: 'Online Certification',
            heading: 'You can be your own guiding star with our help!',
            cta: 'Get started now'
          }
          
        ]
      }
    }
  }
}
</script>

<style lang="scss">
@import './styles/commons.scss';
@import './styles/vars.scss';


</style>
