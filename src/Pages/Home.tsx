import { LinkNewWindow } from '../Components/Link';
import { Paragraph } from '../Components/Paragraph';

export default function Home(){
    return <div className="relative grid place-items-center">
        <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">
            <h1>Food Info!</h1>

            <Paragraph>
                Text that says important
                stuff.
            </Paragraph>

            <h2>Contacts</h2>
            <Paragraph>
                Check out the website listed for more information!
                <li><LinkNewWindow href='https://unitedwayatlanta.org/'>United Way of Greater Atlanta!</LinkNewWindow></li>
            </Paragraph>

            <h3 className='text-2xl font-extrabold mt-8 mb-2'>Credits</h3>
            <li><LinkNewWindow href='https://www.shadertoy.com/view/4tdSWr'>Background of the website!</LinkNewWindow></li>
        </article>
    </div>
}