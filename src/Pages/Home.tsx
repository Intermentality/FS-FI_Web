import { LinkNewWindow } from '../Components/Link';
import { Paragraph } from '../Components/Paragraph';
import { Link } from 'react-router-dom';

export default function Home(){
    return <div className="relative grid place-items-center">
        <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">
            <h1 className='text-5xl.'>Food Explaination!</h1>

            <h2 className="">Info Pages</h2>
            <Paragraph>
                <li><Link to='/FI' className="text-sky-300">Food Insecurity</Link></li>
                <li><Link to='/FS' className="text-sky-300">Food Scarcity</Link></li>
                <li><Link to='/S' className="text-sky-300">Solutions</Link></li>
            </Paragraph>

            <h2 className='text-2xl mb-0 mt-4'>Contacts</h2>
            <Paragraph>
                Check out the website listed for more information!
                <li><LinkNewWindow href='https://unitedwayatlanta.org/'>United Way of Greater Atlanta!</LinkNewWindow></li>
            </Paragraph>

            <h3 className='text-xl font-extrabold mt-2'>Credits</h3>
            <li><LinkNewWindow href='https://github.com/Intermentality'>Website designer!</LinkNewWindow></li>
            <li><LinkNewWindow href='https://www.shadertoy.com/view/4tdSWr'>Background of the website!</LinkNewWindow></li>
        </article>
    </div>
}