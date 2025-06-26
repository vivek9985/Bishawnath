import Cta from '../../Components/Section/Shared/Cta';
import RecentWorks from './../../Components/Section/Project/RecentWorks';

const ProjectPage = () => {
  return (
    <main>
      <section className='pt-10 xl:pt-20 xl:pb-40'>
        <RecentWorks />
      </section>
      <Cta />
    </main>
  );
};

export default ProjectPage;
