import septianz from './septianz.png'
import logo from './logo.png'
import porto1 from './projects/porto1.png'
import porto2 from './projects/porto2.png'
import alhiba from './projects/alhiba.png'
import osinau from './projects/osinau.png'
import spotifyClone from './projects/spotifyClone.png'
import pixel from './projects/pixel.png'
import sritanjung from './projects/sritanjung.png'
import perpusku from './projects/perpusku.jpg'
import { BiHome } from "react-icons/bi"
import { SiAboutdotme } from "react-icons/si"
import { GiSkills } from "react-icons/gi"
import { GrProjects } from "react-icons/gr"

export const images = {
     septianz, logo,
}

export const projects = [
     {
          id: 1,
          title: 'First-time Portfolio',
          image: porto1,
     },
     {
          id: 2,
          title: 'Thir-time Portfolio',
          image: porto2,
     },
     {
          id: 3,
          title: 'Al-Hiba Website',
          image: alhiba,
     },
     {
          id: 4,
          title: 'O-Sinau Website',
          image: osinau,
     },
     {
          id: 5,
          title: 'Pixel Gallery Website',
          image: pixel,
     },
     {
          id: 6,
          title: 'Langkah Sritanjung Website',
          image: sritanjung,
     },
     {
          id: 7,
          title: 'Perpusku App',
          image: perpusku,
     },
     {
          id: 8,
          title: 'Spotify Clone',
          image: spotifyClone,
     },
]

const navClassName = 'text-neutral-500 size-6 hover:text-light transition duration-300'

export const navItems = [
     {
          icon: <BiHome className={navClassName} />,
          link: '/',
          title: 'Home'
     },
     {
          icon: <SiAboutdotme className={navClassName} />,
          link: 'about',
          title: 'About Me'
     },
     {
          icon: <GiSkills className={navClassName} />,
          link: 'skill',
          title: 'My Skill'
     },
     {
          icon: <GrProjects className={navClassName} />,
          link: 'project',
          title: 'My Project'
     },
]

export const footerItems = [
     {
          title: 'SeptianzCode.',
          link: '/'
     },

]