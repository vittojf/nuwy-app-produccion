import React from 'react';
import AcordionAnswer from '../AcordionAnswer/AcordionAnswer';
import SectionsNuwy from '../Sections/Sections';
import FormContact from './FormContact';
import './SectionAnswerAndContact.css'
export default function SectionAnswerAndContact() {
    return (<>
    <SectionsNuwy title="Preguntas frecuentes" className="mt-100 mx-4-5 text-center sectionAnsweAndContact" titleColor="#ffffff" titleClassName="mb-4" titleClassNameText=" title-acordion">

        
    <AcordionAnswer/>
    <FormContact/>
    </SectionsNuwy>
    </>  );
}

