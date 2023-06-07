import { v4 as uuidv4 } from "uuid";
import avatar from "@img/person.jpg";
import Image from "next/image";
import {IoIosFootball, IoIosFitness, IoIosNutrition} from "react-icons/io";
import {TbMathSymbols} from "react-icons/tb";
import {MdManageAccounts} from "react-icons/md";

export const blastTeam = [
  {
    id: uuidv4(),
    personImage: (
      <Image src={avatar} object-fit="cover" style={{ borderRadius: "100%" }} />
    ),
    name: "آرش",
    position: "مدیریت",
    iconPosition: (
      <MdManageAccounts style={{color:'#fff'}} size={30} />
    ),
  },
  {
    id: uuidv4(),
    personImage: (
      <Image src={avatar} object-fit="cover" style={{ borderRadius: "100%" }} />
    ),
    name: "سعید",
    position: "مشاور",
    iconPosition: (
      <MdManageAccounts style={{color:'#fff'}} size={30} />
    ),
  },
  {
    id: uuidv4(),
    personImage: (
      <Image src={avatar} object-fit="cover" style={{ borderRadius: "100%" }} />
    ),
    name: "حسین",
    position: "مربی آمادگی بدنی",
    iconPosition: (
      <IoIosFitness style={{color:'#fff'}} size={30} />
    ),
  },
  {
    id: uuidv4(),
    personImage: (
      <Image src={avatar} object-fit="cover" style={{ borderRadius: "100%" }} />
    ),
    name: "عرفان",
    position: "مشاور غذایی",
    iconPosition: (
      <IoIosNutrition style={{color:'#fff'}} size={30} />
    ),
  },
  {
    id: uuidv4(),
    personImage: (
      <Image src={avatar} object-fit="cover" style={{ borderRadius: "100%" }} />
    ),
    name: "فرید",
    position: "حسابدار",
    iconPosition: (
      <TbMathSymbols style={{color:'#fff'}} size={30} />
    ),
  },
  {
    id: uuidv4(),
    personImage: (
      <Image src={avatar} object-fit="cover" style={{ borderRadius: "100%" }} />
    ),
    name: "پیمان",
    position: "مربی کراسفیت",
    iconPosition: (
      <IoIosFitness style={{color:'#fff'}} size={30} />
    ),
  },
  {
    id: uuidv4(),
    personImage: (
      <Image src={avatar} object-fit="cover" style={{ borderRadius: "100%" }} />
    ),
    name: "امید",
    position: "مربی فونبال",
    iconPosition: (
      <IoIosFootball style={{color:'#fff'}} size={30} />
    ),
  },
];
