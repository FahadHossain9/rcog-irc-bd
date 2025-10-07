export type Doctor = {
  slug: string;
  name: string;
  title?: string;
  qualifications: string;
  hospital?: string;
  image?: string; // expected in public/help-desk/
};

export const doctors: Doctor[] = [
  {
    slug: "prof-dr-fawzia-hossain",
    name: "Prof Dr Fawzia Hossain",
    title: "Specialist, Obstetrics and Gynaecology",
    qualifications: "MBBS MRCOG (UK), FMAS and DMAS (India)",
    hospital: "United Hospital Limited",
    image: "/help-desk/Prof-Dr-Fawzia-Hossain.jpg",
  },
  {
    slug: "dr-sumaiya-binte-asif",
    name: "Dr Sumaiya Binte Asif",
    title: "Specialist, Obstetrics and Gynaecology",
    qualifications: "MBBS MRCOG (UK), FMAS and DMAS (India)",
    hospital: "United Hospital Limited",
    image: "/help-desk/Dr-Sumaiya-Binte-Asif.jpg",
  },
  {
    slug: "dr-reshma-sharmin",
    name: "Dr Reshma Sharmin",
    title: "Senior Consultant",
    qualifications:
      "FCPS, MRCOG, FMS, Fellowship in IVF (WLH, India), Advance training in IVF (BACC, India)",
    hospital: "Apollo Imperial Hospital",
    image: "/help-desk/Dr-Reshma-Sharmin.jpg",
  },
  {
    slug: "dr-maniza-khan",
    name: "Dr Maniza Khan",
    title: "Specialist, Obstetrics and Gynaecology",
    qualifications: "MBBS, MRCOG (UK)",
    hospital: "Asgar Ali Hospital",
    image: "/help-desk/Dr-Maniza-Khan.jpg",
  },
];
