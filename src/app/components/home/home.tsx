"use client"
import { Image, Carousel } from "antd";
function Home() {
    
    return (<div>
        <div>
            <Carousel autoplay>
                <div className="max-h-[600px]">
                    <Image preview={false}
                        width="100%"
                        height="600px"
                        src="./colleagues-team.jpg"
                        alt="Image 1"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div>
                    <Image preview={false}
                        width="100%"
                        height="600px"
                        src="./people-office-during-work-day.avif"
                        alt="Image 2"
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div>
                    <Image preview={false}
                        width="100%"
                        height="600px"
                        src="./team-business-people-collaborating.avif"
                        alt="Image 3"
                        style={{ objectFit: 'cover' }}
                    />
                </div>

            </Carousel>
            
            
        </div>
    </div>);
}

export default Home;