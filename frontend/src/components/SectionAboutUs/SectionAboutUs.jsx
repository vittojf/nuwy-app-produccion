import React from "react";
import SectionsNuwy from "../Sections/Sections";
import ListPerson from "./listPerson";
import './SectionAboutUs.css'
function SectionAboutUs({ children, className, title, titleColor }) {

  const person =[
    {
      url:'/img/person11.png',
      name:'Carla Kriss',
      cargo:'Gerente general',
    },
    {
      url:'/img/person1.png',
      name:'Helen Yessica',
      cargo:'Abogado',
    },
    {
      url:'/img/person2.png',
      name:'Carla Kriss',
      cargo:'Gerente general',
    },
      {
      url:'/img/person3.png',
      name:'Carla Kriss',
      cargo:'Gerente general',
    },

    {
      url:'/img/person4.png',
      name:'Carla Kriss',
      cargo:'Gerente general',
    },
    {
      url:'/img/person5.png',
      name:'Carla Kriss',
      cargo:'Gerente general',
    },
  ]
  return (<>

    <SectionsNuwy title="Tanta petere igitur, ne sineres memini fieri etiam aliquam " className="mt-100 mx-4-5 text-white sectionAboutUs">
      <div className="text-about-us" >
        <p>
          Tanta petere igitur, ne sineres memini fieri etiam aliquam
          inclinationem ad consequendum minima. Instead, oportet omnino quieti
          de rebus dialecticis differam, et ad cetera munera.
        </p>
        <p>
          Quodsi haberent magnalia inter potentiam et divitias, et non illam
          quidem haec eo spectant haec quoque vos omnino desit illud quo solo
          felicitatis libertatisque perficiuntur.
        </p>
        <p>
          Opus igitur est dicere possit dura omni specie, “Tu autem in specie,
          non videntur, nec omnino res est.” Et examine ab eis praecepta eius
          quae habes, et primo et principaliter consistit in hoc, utrum sit de
          rebus, quae sunt in nostra potestate, vel non
        </p>
      </div>
    </SectionsNuwy>
    <SectionsNuwy title="Tanta petere igitur, ne sineres memini fieri etiam aliquam" color="#18305D" className="pb-5 section-persons text-center mt-100 " titleClassName="mx-4-5 pt-4">
      <div className="mt-4-5">
<ListPerson persons={person}/>
      </div>

    </SectionsNuwy>
    </>
  );
}

export default SectionAboutUs;
