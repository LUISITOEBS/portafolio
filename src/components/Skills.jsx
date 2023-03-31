import SkillBar from 'react-skillbars';

const skills = [
    { type: 'PHP', level: 95,  color: {bar: '#FFA4A4', title: {text: '#fff', background: '#FF4D4D'}}  },
    { type: 'SQL', level: 90,  color: {bar: '#8DF4E5', title: {text: '#fff', background: '#5BE9B9'}} },
    { type: 'REST API', level: 90,  color: {bar: '#ff80ed', title: {text: '#fff', background: '#ff00ff'}} },
    { type: 'Javascript', level: 80,  color: {bar: '#ffff72 ', title: {text: '#fff', background: '#ffeb3b '}} },
    { type: 'React', level: 75,  color: {bar: '#a7f3d0', title: {text: '#fff', background: '#00ffff'}} },
    { type: 'Laravel', level: 70,  color: {bar: '#ff8c69', title: {text: '#fff', background: '#ff4500'}} },
    { type: 'Node', level: 70,  color: {bar: '#6ea8ff', title: {text: '#fff', background: '#007bff'}} },
    { type: 'Python', level: 70,  color: {bar: '#80ff80', title: {text: '#fff', background: '#00ff00'}} },
    { type: 'Flutter', level: 65,  color: {bar: '#ba8be2', title: {text: '#fff', background: '#8a2be2'}} },
    { type: 'Django', level: 60,  color: {bar: '#ffb347', title: {text: '#fff', background: '#ff7f00'}}},
];


export const Skills = () => {
    return (
      <div data-aos="fade-left" data-aos-duration="2000" data-aos-delay="0">
        <h3 className='text-center text-bold'>Mis Habilidades:</h3>
        <div className='mySkills'>
          <SkillBar skills={skills} />
        </div>
      </div>
      
    );
};