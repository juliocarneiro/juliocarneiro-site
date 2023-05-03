/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import * as S from './About.styles'
import { motion } from 'framer-motion'
import { opacityVariants, topVariants } from 'theme/variants'

const About = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <S.Wrapper>
      <p>
        Hi, my name is Júlio Carneiro, Im a Senior Front-end Developer 👨‍💻 who is
        passionate about JavaScript, Devops, Hacking technologies and its entire
        ecosystem.{' '}
        <span onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Hide my skills...' : 'See my skills...'}
        </span>
      </p>
      <motion.div
        initial={{ display: 'none' }}
        animate={expanded ? 'open' : 'closed'}
        variants={opacityVariants}
        style={{ overflow: 'hidden', height: 170 }}
      >
        <br />
        <img
          src="https://camo.githubusercontent.com/1280dda586170e471c1a3b124c5249dc6ccfb7de48575aa584990a8e0572e944/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4c696e75782d4541354535453f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d666666266c6f676f3d6c696e7578"
          alt="Linux"
        />
        <img
          src="https://camo.githubusercontent.com/8cf9c6415fa0b8da09b4e04b7ba15d76de5de6b3814870017b2a6ab2813fc2fe/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d48544d4c2d4534344432353f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d666666266c6f676f3d68746d6c35"
          alt="HTML"
        />
        <img
          src="https://camo.githubusercontent.com/943f84931e290cbd44c7fc7311b16c8ff0332179d94e0cae7dcdaa8144669361/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4353532d3235344445363f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d666666266c6f676f3d63737333"
          alt="CSS"
        />
        <img
          src="https://camo.githubusercontent.com/9d07c04bdd98c662d5df9d4e1cc1de8446ffeaebca330feb161f1fb8e1188204/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4637444631453f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d626c61636b"
          alt="JavaScript"
        />
        <img
          src="https://camo.githubusercontent.com/5f35d04a57b78b2be858db418ce7f31eaed484b9373568507544b3d9a2327237/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747970657363726970742532302d2532333030376163632e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465"
          alt="TypeScript"
        />
        <img
          src="https://camo.githubusercontent.com/eff729e2771d06d9b7bed1f8bc8bd008be2ed88af282f1db28d02a716396fbda/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d52656163742e6a732d3138424345453f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d666666266c6f676f3d7265616374"
          alt="ReactJs"
        />
        <img
          src="https://camo.githubusercontent.com/335bfdb8941e81035404469560bf43f6dab3f0f546e6597292037458cccf8a1e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6578742e6a732d3030303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6578742e6a73266c6f676f436f6c6f723d7768697465"
          alt="NextJs"
        />
        <img
          src="https://camo.githubusercontent.com/3b6d3562094f8519838117955bd2435c3d0938caee652f3d04e010806d2b9617/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6573742d6364636463643f7374796c653d666f722d7468652d6261646765266c6f676f3d6a657374266c6f676f436f6c6f723d72656426636f6c6f723d79656c6c6f77"
          alt="Jest"
        />
        <img
          src="https://camo.githubusercontent.com/2530b3759b1402b48964382edd022a4863b11a5b74d5c562d88fec8b3bc6c96a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d437970726573732d4541354535453f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d666666266c6f676f3d63797072657373"
          alt="Cypress"
        />
        <img
          src="https://camo.githubusercontent.com/0b9bce580a369d91352cf37397f1e079ef104531fc0bc53a145deb8f43fca535/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163745f4e61746976652d3230323332413f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d363144414642"
          alt="ReactNative"
        />
        <img
          src="https://camo.githubusercontent.com/71d6c65f4febc69a6ab40ed9053ed3c303da0a6f9315a2ac330ba0e766be2467/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d446172742d3138424345453f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d666666266c6f676f3d64617274"
          alt="Dart"
        />
        <img
          src="https://camo.githubusercontent.com/61372d6b14d665e6fbc5b3247f83b2d5782c84fbd1907f22fa080432209b370e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d466c75747465722d3138424345453f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d666666266c6f676f3d666c7574746572"
          alt="Flutter"
        />
        <img
          src="https://camo.githubusercontent.com/dfc69d704694f22168bea3d84584663777fa5301dcad5bbcb5459b336da8d554/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d3433383533443f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465"
          alt="Node"
        />
        <img
          src="https://camo.githubusercontent.com/8bb37f756c1b2b18d36110e52ba9c38bf5ef261a57f259f7ae31aa1e17f618fa/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4761747362792d3634333139353f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d666666266c6f676f3d676174736279"
          alt="Gatsby"
        />
        <img
          src="https://camo.githubusercontent.com/3344c73daa1be409010257b01fe01913fb322319bc0ca492000026874d426e60/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4772617068514c2d4530333441373f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d666666266c6f676f3d6772617068716c"
          alt="GraphQL"
        />
        <img
          src="https://camo.githubusercontent.com/b3914b3bcdceff21d81487ce13ea6313766650f2681700da6dfb4f93e98197c9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d5374726170692d3138424345453f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d666666266c6f676f3d737472617069"
          alt="Strapi"
        />
        <img
          src="https://camo.githubusercontent.com/4f29368c6116a92ad2cefc098f33b98386fafd523ac9e9d6361e35e51eec60dd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d457870726573732d3138424345453f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d666666266c6f676f3d65787072657373"
          alt="Express"
        />
        <img
          src="https://camo.githubusercontent.com/7eb7b05d6ad310934563fef981f28aeb36c3ab88621dddc7b152a3a7aa696f98/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d45534c696e742d3442333243333f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d666666266c6f676f3d65736c696e74"
          alt="ESLint"
        />
        <img
          src="https://camo.githubusercontent.com/e13591bf07c6c564df27651645e15954cc655043ca8130ff45b376f8e67ed0b4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d50726574746965722d4541354535453f7374796c653d666f722d7468652d6261646765266c6f676f436f6c6f723d666666266c6f676f3d7072657474696572"
          alt="Prettier"
        />
        <img
          src="https://camo.githubusercontent.com/41326de293d3848e2ab0f29bf1680427128757fe6b586ceddf1097cb4eeb5ff7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374796c65642d2d636f6d706f6e656e74732d4442373039333f7374796c653d666f722d7468652d6261646765266c6f676f3d7374796c65642d636f6d706f6e656e7473266c6f676f436f6c6f723d7768697465"
          alt="Styled-Components"
        />
        <img
          src="https://camo.githubusercontent.com/63350538fde994bc287ccd4908809301e157980e6564bf78d2c5cec22c0a5914/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446f636b65722d3243413545303f7374796c653d666f722d7468652d6261646765266c6f676f3d646f636b6572266c6f676f436f6c6f723d7768697465"
          alt="Docker"
        />

        <img
          src="https://camo.githubusercontent.com/1d3206bc7aac0e24c11aa44e4f8cb82ba4dd112b07f7233bbf2b6b9a465eadfd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f426162656c2d3631646166623f7374796c653d666f722d7468652d6261646765266c6f676f3d626162656c266c6f676f436f6c6f723d79656c6c6f7726636f6c6f723d323832633334"
          alt=""
        />
        <img
          src="https://camo.githubusercontent.com/11e0d9a6bbdeba16645ef3b385ad6017337e1254ec9c11b21cc2c04825b0fd74/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5765627061636b2d3631646166623f7374796c653d666f722d7468652d6261646765266c6f676f3d7765627061636b266c6f676f436f6c6f723d36316461666226636f6c6f723d323832633334"
          alt=""
        />
        <img
          src="https://camo.githubusercontent.com/879423585ed087f3c973857c43ba7e7d84f52c993d2c937055726339fbf921d9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f506f73746d616e2d4646364333373f7374796c653d666f722d7468652d6261646765266c6f676f3d506f73746d616e266c6f676f436f6c6f723d7768697465"
          alt=""
        />
        <img
          src="https://camo.githubusercontent.com/bd2bd127c104ba5c98bb12c70801b075aee1f040009089510f69554300e7ff41/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4769742d4630353033323f7374796c653d666f722d7468652d6261646765266c6f676f3d676974266c6f676f436f6c6f723d7768697465"
          alt=""
        />
        <img
          src="https://camo.githubusercontent.com/364d15b7adcad9695caa4598e84be41305b1ca2c2f5eadd69b477b3cb307559f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f66697265626173652d6666636132383f7374796c653d666f722d7468652d6261646765266c6f676f3d6669726562617365266c6f676f436f6c6f723d7768697465"
          alt=""
        />
        <img
          src="https://camo.githubusercontent.com/3bcc8da5c94cefdf2d976837d1be601f4d44d36b58d9590e36debe834a6e34de/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4865726f6b752d3433303039383f7374796c653d666f722d7468652d6261646765266c6f676f3d6865726f6b75266c6f676f436f6c6f723d7768697465"
          alt=""
        />
        <img
          src="https://camo.githubusercontent.com/92dde1e7c42c013a5fce4dfeee0843f06710bfd38a610885e33a273c7eca0d22/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e65746c6966792d3030433742373f7374796c653d666f722d7468652d6261646765266c6f676f3d6e65746c696679266c6f676f436f6c6f723d7768697465"
          alt=""
        />
        <img
          src="https://camo.githubusercontent.com/2c2e3cab0541596a12e216df86e68fa554256f25826b55a068993a3edfbcd0e8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6174657269616c2d2d55492d3030383143423f7374796c653d666f722d7468652d6261646765266c6f676f3d6d6174657269616c2d7569266c6f676f436f6c6f723d7768697465"
          alt=""
        />
        <img
          src="https://camo.githubusercontent.com/6908bc5919e46cd787b8e5117f092f5ed37da82e8bd602e6339060ea0fff722c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656475782d3539334438383f7374796c653d666f722d7468652d6261646765266c6f676f3d7265647578266c6f676f436f6c6f723d7768697465"
          alt=""
        />
        <img
          src="https://camo.githubusercontent.com/3fa61cc56f89b778dfe6a540e53bcc076921783c7a09f4bf1aa071c69af8df34/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f536e796b2d3030303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d736e796b266c6f676f436f6c6f723d7768697465"
          alt=""
        />
      </motion.div>
      <div>
        <br />
        <ul>
          <li>
            🔭 I’m currently working on JavaScript/Typescript, React/Next.js,
            Strapi and Node apps/systems
          </li>
          <li>
            🌱 I’m currently learning Motion Design, Web3, Devops and of course
            JS improvments
          </li>
          <li>
            💬 Ask me about: tech, music production, terror series and a little
            bit about jiu-jitsu.
          </li>
          <li>
            ⚡ Technologies: Javascript, React, Nextjs, Gatsby, React-Native,
            NodeJS, Strapi, Dart, Flutter, Python, Shell-script
          </li>
        </ul>
      </div>
      <br />
      <br />
      <S.Clients>
        <h2>Clients:</h2>
        <br />
        <a target="_blank" href="https://www.munchies.money" rel="noreferrer">
          <b>Munchies Money</b> - NextJs, Context Api, Framer-motion, Web3,
          Styled-components.
        </a>
        <br />
        <a
          target="_blank"
          href="https://www.mitsubishimotors.com.br"
          rel="noreferrer"
        >
          <b>Mitsubishi Brasil</b> - NextJs, Context Api, Preact,
          Styled-components.
        </a>
        <br />
        <a
          target="_blank"
          href="https://www.iguanasports.com.br/"
          rel="noreferrer"
        >
          <b>Iguana Sports</b> - NextJs, Graphql, Strapi, Styled-Components,
          CI/CD, Docker ducky.
        </a>
        <br />
        <a target="_blank" href="https://lapag.com.br" rel="noreferrer">
          <b>gal,</b> - Gatsby, Strapi, Styled-components.
        </a>
        <br />
        <a target="_blank" href="https://sprinta.com.br" rel="noreferrer">
          <b>Sprinta</b> - React, NextJs, Redux, Saga, React-query,
          Styled-components.
        </a>
        <br />
        <a target="_blank" href="https://portoseguro.com.br" rel="noreferrer">
          <b>Porto Seguro</b> - React, Redux, Saga, Styled-components.
        </a>
        <br />
        <a target="_blank" href="https://clickbus.com.br" rel="noreferrer">
          <b>ClickBus</b> - HTML, CSS Javascript, jQuery, Wordpress, PHP.
        </a>
        <br />
        <a target="_blank" href="https://hostgator.com" rel="noreferrer">
          <b>HostGator</b> - NextJs, Redux, Styled-components.
        </a>
        <br />
        <a target="_blank" href="https://folha.com" rel="noreferrer">
          <b>Folha.com</b> - HTML, CSS, Javascript, jQuery, PHP, Wordpress.
        </a>
      </S.Clients>
      <br />
      <br />
      <S.OpenSource>
        <h2>Open source:</h2>
        <br />
        <a
          target="_blank"
          href="https://github.com/juliocarneiro/boilerplate-next-ts"
          rel="noreferrer"
        >
          <b>boilerplate-next-ts</b> - NextJS boilerplate with the most modern
          js tools.
        </a>
        <br />
        <a
          target="_blank"
          href="https://github.com/juliocarneiro/hacking-tools"
          rel="noreferrer"
        >
          <b>hacking-tools</b> - A collection of tools for hackers, pentesters &
          security researchers.
        </a>
        <br />
        <a
          target="_blank"
          href="https://github.com/juliocarneiro/caicai.py"
          rel="noreferrer"
        >
          <b>caicai.py</b> - This is a simple Port Flooder written in Python 3.
        </a>
        <br />
        <a
          target="_blank"
          href="https://github.com/juliocarneiro/cve-search-extension"
          rel="noreferrer"
        >
          <b>cve-search-extension</b> - CVE search in chrome extension.
        </a>
        <br />
        <a
          target="_blank"
          href="https://github.com/juliocarneiro/rubber-ducky-scripts"
          rel="noreferrer"
        >
          <b>rubber-ducky-scripts</b> - A collection of scripts for rubber
          ducky.
        </a>
      </S.OpenSource>
    </S.Wrapper>
  )
}

export default About
