import { v4 as uuidv4 } from "uuid";
import avatar from "@img/person.jpg";
import Image from "next/image";
import {GrUserManager} from 'react-icons/gr';
import { TiSocialYoutube } from "react-icons/ti";

export const blastTeam = [
  {
    id: uuidv4(),
    personImage: (
      <Image src={avatar} object-fit="cover" style={{ borderRadius: "100%" }} />
    ),
    name: "بلست",
    position: "مدیریت",
    iconPosition: (
    <TiSocialYoutube style={{color:'#fff'}} size={30} />
    ),
  },
  {
    id: uuidv4(),
    personImage: (
      <Image src={avatar} object-fit="cover" style={{ borderRadius: "100%" }} />
    ),
    name: "بلست",
    position: "مدیریت",
  },
  {
    id: uuidv4(),
    personImage: (
      <Image src={avatar} object-fit="cover" style={{ borderRadius: "100%" }} />
    ),
    name: "بلست",
    position: "مدیریت",
  },
  {
    id: uuidv4(),
    personImage: (
      <Image src={avatar} object-fit="cover" style={{ borderRadius: "100%" }} />
    ),
    name: "بلست",
    position: "مدیریت",
  },
  {
    id: uuidv4(),
    personImage: (
      <Image src={avatar} object-fit="cover" style={{ borderRadius: "100%" }} />
    ),
    name: "بلست",
    position: "مدیریت",
  },
  {
    id: uuidv4(),
    personImage: (
      <Image src={avatar} object-fit="cover" style={{ borderRadius: "100%" }} />
    ),
    name: "بلست",
    position: "مدیریت",
  },
  {
    id: uuidv4(),
    personImage: (
      <Image src={avatar} object-fit="cover" style={{ borderRadius: "100%" }} />
    ),
    name: "بلست",
    position: "مدیریت",
  },
];
