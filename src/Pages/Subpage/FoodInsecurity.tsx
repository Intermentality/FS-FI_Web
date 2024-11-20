import { LinkNewWindow } from "../../Components/Link"
import { Paragraph } from "../../Components/Paragraph"

export default function FoodInsecurity(){
    return <div className="relative grid place-items-center">
        <article className="my-4 p-2 w-full max-w-sm md:max-w-2xl">
            <h1>Food Insecurity</h1>

            <h2 className="-mb-2">What is Food Insecurity?</h2>
            <Paragraph>
                You may have heard of food scarcity or food insecurity before,
                 but what are they? Food Scarcity concerns lack of food, 
                 whereas food insecurity concerns lack of nutrients. 
                 
                 There are many people who do not have access to healthy food, 
                 whether because of financial, geological, or other problems. 
                 This is food insecurity. 
                 
                 Even though some people may still have access to food, 
                 it may not have the necessary nutritional value.  
            </Paragraph>

            <h2 className="-mb-2">How Prevalent is Food Insecurity?</h2>
            <Paragraph>
                A little less than 40 million Americans suffer from food insecurity, 
                nearly 12 million of those being children. Worldwide, that number is far larger. 
                
                About 3.1 billion people in total were not able to afford a healthy diet 
                according to “State of Food Security and Nutrition in the World report”. 
                <li><LinkNewWindow href='https://openknowledge.fao.org/bitstreams/f1ee0c49-04e7-43df-9b83-6820f4f37ca9/download'>
                State of Food Security and Nutrition in the World Report</LinkNewWindow></li>
            </Paragraph>

            <h2 className="-mb-2">What Can I do about it?</h2>
            <Paragraph>
                There are many things that you can do to help to help with food insecurity in your local area. 
                You can donate food to local volunteer or non-profit organizations that distribute food. 
                
                You can also encourage people close to you to eat healthier foods with the necessary nutrients, 
                as there are some people who have the ability to eat healthier but don't.  
            </Paragraph>

            <h2 className="-mb-2">What Food should I eat?</h2>
            <Paragraph>
                There is no food in particular that you can eat for a healthy lifestyle. 
                Rather, any healthy diet should include food from all food groups in order to get adequate nutrition. 
                
                These groups include fruit, vegetables, grains, and protein foods. 
                You can also have food or drink from dairy groups in order to get some vitamins. 
                Together, the food from these groups should give you a healthy amount of fat, protein, carbohydrates, 
                and vitamins along with total calories.    
            </Paragraph>

            <h3 className="text-2xl font-extrabold mt-6 -mb-2">Credits</h3>
            <Paragraph>
                <li><LinkNewWindow href="https://www.un.org/en/global-issues/food#:~:text=Apart%20from%20hunger%2C%20the%20report,under%20five%20suffer%20from%20malnutrition">UN.Org</LinkNewWindow></li>
                <li><LinkNewWindow href="https://www.usda.gov/media/blog/2017/09/26/back-basics-all-about-myplate-food-groups#:~:text=As%20the%20MyPlate%20icon%20shows,key%20building%20blocks%2C%20plus%20oils">USDA.Gov</LinkNewWindow></li>
            </Paragraph>
        </article>
    </div>
}