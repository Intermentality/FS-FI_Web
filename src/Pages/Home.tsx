import { LinkNewWindow } from '../Components/Link';
import { Paragraph } from '../Components/Paragraph';
import { Link } from 'react-router-dom';
import QRCode from 'react-qr-code';

export default function Home(){
    return <div className="relative grid place-items-center">
        <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">
            <h1 className='text-5xl.'>Food Explaination!</h1>

            <Paragraph>
                Mr.Jones class website regarding Food Insecurity &
                Food Scarcity!
            </Paragraph>

            <h2 className="-mt-0">Info Pages</h2>
            <Paragraph>
                <li><Link to='/FI' className="text-sky-300">Food Insecurity</Link></li>
                <li><Link to='/FS' className="text-sky-300">Food Scarcity</Link></li>
                <li><Link to='/S' className="text-sky-300">Solutions</Link></li>
            </Paragraph>

            <h2 className='text-2xl -mb-2 mt-4'>Contacts</h2>
            <Paragraph>
                Check out the website listed for more information!
                <li><LinkNewWindow href='https://unitedwayatlanta.org/'>United Way of Greater Atlanta!</LinkNewWindow></li>
            </Paragraph>

            <h3 className='text-xl font-extrabold mt-2'>Credits</h3>
            <li><LinkNewWindow href='https://github.com/Intermentality'>Website designer!</LinkNewWindow></li>
            <li><LinkNewWindow href='https://www.shadertoy.com/view/4tdSWr'>Background of the website!</LinkNewWindow></li>
            <Paragraph>
            <p className='text-sm -mt-2'>
                To look at the code, it'll be on my computer during showcase as it's private. 👍
            </p>
            </Paragraph>

            <Paragraph>
            <p className='text-sm -mt-2'>
            It's a Typescript React website with Vite! ❤️
            </p>
            </Paragraph>

            <h2 className="text-xl font-extrabold -mb-0 mt-2">View it on your phone!</h2>
            <QRCode size={200} value="https://fs-fi-web.pages.dev/" />
        </article>
    </div>
}