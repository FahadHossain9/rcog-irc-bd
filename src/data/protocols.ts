export type Protocol = {
  slug: string;
  id: string;
  title: string;
  category: string;
  description: string;
  isNew?: boolean;
  image?: string;
  pdf?: string;
  content?: string; // markdown or html snippet for the detailed pages
};

// 22 protocols (2 fully detailed for now)
export const protocols: Protocol[] = [
  {
    slug: "maternal-collapse",
    id: "001",
    title: "Maternal Collapse in Pregnancy and Puerperium",
    category: "Emergency",
    description:
      "Guidelines for immediate management of maternal collapse during pregnancy and postpartum.",
    image: "/images/protocols/maternal-collapse.jpg",
    pdf: "/documents/protocols/maternal-collapse.pdf",
    isNew: true,
    content:
      "## Immediate Management\n\n- Call for help and initiate resuscitation (ABC).\n- Left lateral tilt to avoid aortocaval compression.\n- Establish IV access, oxygen, and monitoring.\n- Consider reversible causes: hemorrhage, embolism, eclampsia, sepsis, anesthesia complications.\n\n### Post-resuscitation\n- Stabilize and transfer to critical care.\n- Debrief and document thoroughly.",
  },
  {
    slug: "recurrent-pregnancy-loss",
    id: "002",
    title: "Recurrent Pregnancy Loss (RPL)",
    category: "Gynecology",
    description:
      "Comprehensive approach to diagnosis and management of recurrent pregnancy loss.",
    image: "/images/protocols/rpl.jpg",
    pdf: "/documents/protocols/recurrent-pregnancy-loss.pdf",
    content:
      "## Diagnostic Workup\n\n- History, examination, and counseling.\n- Genetic: parental karyotype if indicated.\n- Uterine factors: ultrasound/hysteroscopy.\n- Endocrine: thyroid, diabetes, prolactin.\n- Antiphospholipid syndrome screening.\n\n## Management\n- Treat identified causes.\n- Empathetic counseling and support.\n- Consider progesterone support per guideline.",
  },
  {
    slug: "nvd-ivd",
    id: "003",
    title: "NVD & IVD",
    category: "Obstetrics",
    description:
      "Normal Vaginal Delivery and Instrumental Vaginal Delivery guidelines.",
    image: "/images/protocols/nvd-ivd.jpg",
    pdf: "/documents/protocols/nvd-ivd.pdf",
    isNew: true,
  },
  {
    slug: "thyroid-disorder",
    id: "004",
    title: "Thyroid Disorder in Pregnancy",
    category: "Maternal Medicine",
    description:
      "Management of thyroid dysfunctions during pregnancy and their impact.",
    image: "/images/protocols/thyroid-disorder.jpg",
    pdf: "/documents/protocols/thyroid-disorder.pdf",
  },
  {
    slug: "postpartum-hemorrhage",
    id: "005",
    title: "Postpartum Hemorrhage (PPH)",
    category: "Emergency",
    description:
      "Prevention, diagnosis, and management strategies for postpartum hemorrhage.",
    image: "/images/protocols/pph.jpg",
    pdf: "/documents/protocols/pph.pdf",
  },
  {
    slug: "premature-rupture-membranes",
    id: "006",
    title: "Premature Rupture of Membranes (PROM)",
    category: "Obstetrics",
    description:
      "Guidelines for the assessment and management of premature rupture of membranes.",
    image: "/images/protocols/prom.jpg",
    pdf: "/documents/protocols/prom.pdf",
  },
  {
    slug: "gestational-diabetes",
    id: "007",
    title: "Gestational Diabetes",
    category: "Maternal Medicine",
    description: "Screening and management of GDM.",
    image: "/images/protocols/gdm.jpg",
  },
  {
    slug: "preeclampsia",
    id: "008",
    title: "Preeclampsia and Eclampsia",
    category: "Emergency",
    description: "Recognition and treatment of hypertensive disorders.",
    image: "/images/protocols/preeclampsia.jpg",
  },
  {
    slug: "ectopic-pregnancy",
    id: "009",
    title: "Ectopic Pregnancy",
    category: "Emergency",
    description: "Diagnosis and management algorithms.",
    image: "/images/protocols/ectopic.jpg",
  },
  {
    slug: "anaemia-pregnancy",
    id: "010",
    title: "Anaemia in Pregnancy",
    category: "Maternal Medicine",
    description: "Evaluation and treatment approach.",
    image: "/images/protocols/anaemia.jpg",
  },
  {
    slug: "gbs-prophylaxis",
    id: "011",
    title: "GBS Prophylaxis",
    category: "Obstetrics",
    description: "Prevention strategies for neonatal sepsis.",
    image: "/images/protocols/gbs.jpg",
  },
  {
    slug: "placenta-previa",
    id: "012",
    title: "Placenta Praevia & Accreta",
    category: "Obstetrics",
    description: "Delivery planning and hemorrhage readiness.",
    image: "/images/protocols/placenta-previa.jpg",
  },
  {
    slug: "infections-pregnancy",
    id: "013",
    title: "Infections in Pregnancy",
    category: "Maternal Medicine",
    description: "Common infections and safe therapies.",
    image: "/images/protocols/infections.jpg",
  },
  {
    slug: "preterm-labour",
    id: "014",
    title: "Preterm Labour",
    category: "Obstetrics",
    description: "Tocolysis, steroids and neonatal liaison.",
    image: "/images/protocols/preterm.jpg",
  },
  {
    slug: "operative-delivery",
    id: "015",
    title: "Operative Vaginal Delivery",
    category: "Obstetrics",
    description: "Forceps vs vacuum indications and technique.",
    image: "/images/protocols/ovd.jpg",
  },
  {
    slug: "cesarean-section",
    id: "016",
    title: "Cesarean Section Protocol",
    category: "Obstetrics",
    description: "Pre, intra and post-operative checklist.",
    image: "/images/protocols/cs.jpg",
  },
  {
    slug: "hyperemesis",
    id: "017",
    title: "Hyperemesis Gravidarum",
    category: "Maternal Medicine",
    description: "Assessment and stepwise management.",
    image: "/images/protocols/hyperemesis.jpg",
  },
  {
    slug: "rh-isoimmunization",
    id: "018",
    title: "Rh Isoimmunization",
    category: "Maternal Medicine",
    description: "Screening and anti-D prophylaxis.",
    image: "/images/protocols/rh.jpg",
  },
  {
    slug: "fibroids-pregnancy",
    id: "019",
    title: "Fibroids in Pregnancy",
    category: "Obstetrics",
    description: "Risks and conservative management.",
    image: "/images/protocols/fibroid.jpg",
  },
  {
    slug: "asthma-pregnancy",
    id: "020",
    title: "Asthma in Pregnancy",
    category: "Maternal Medicine",
    description: "Medication safety and exacerbation care.",
    image: "/images/protocols/asthma.jpg",
  },
  {
    slug: "urosepsis-pregnancy",
    id: "021",
    title: "Urosepsis in Pregnancy",
    category: "Emergency",
    description: "Early recognition and antibiotics.",
    image: "/images/protocols/urosepsis.jpg",
  },
  {
    slug: "vbac",
    id: "022",
    title: "VBAC Counseling",
    category: "Obstetrics",
    description: "Selection criteria and intrapartum care.",
    image: "/images/protocols/vbac.jpg",
  },
];

export function getProtocolBySlug(slug: string): Protocol | undefined {
  return protocols.find((p) => p.slug === slug);
}
