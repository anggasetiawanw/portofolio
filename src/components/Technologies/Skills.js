import { DiTerminal, DiJava, DiHtml5 } from 'react-icons/di';
import { SiFirebase, SiGit, SiDart, SiCss3, SiMysql } from 'react-icons/si';
import { RiFlutterFill } from 'react-icons/ri';
import { VscRadioTower } from 'react-icons/vsc';

export const Skills = [
  {
    slug: 'IoT',
    Component: VscRadioTower,
    title: 'IoT',
    Description: () => <>ESP32, STM32, MQTT, PCB Design</>,
  },
  {
    slug: 'flutter',
    Component: RiFlutterFill,
    title: 'Flutter',
    Description: () => <>Cross-platform app development</>,
  },
  {
    slug: 'dart',
    Component: SiDart,
    title: 'Dart',
    Description: () => <>Flutter apps only</>,
  },
  {
    slug: 'java',
    Component: DiJava,
    title: 'Java',
    Description: () => <>Android apps and Java Spring</>,
  },

  {
    slug: 'html',
    Component: DiHtml5,
    title: 'HTML',
    Description: () => <>Static webpages and portfolio projects</>,
  },
  {
    slug: 'css',
    Component: SiCss3,
    title: 'CSS',
    Description: () => <>Styling of my webpages</>,
  },

  {
    slug: 'sql',
    Component: SiMysql,
    title: 'MySQL',
    Description: () => <>Storing data</>,
  },
  {
    slug: 'terminal',
    Component: DiTerminal,
    title: 'Bash',
    Description: () => <>Ease of life and build scripts</>,
  },
  {
    slug: 'firebase',
    Component: SiFirebase,
    title: 'Firebase',
    Description: () => <>Authentication, database and analytics</>,
  },
  {
    slug: 'git',
    Component: SiGit,
    title: 'Git',
    Description: () => <>Code management and open source contributions</>,
  },
];
