import { Image } from 'antd';

const HomePage = () => {
    return (
        <div className="flex flex-col 2xl:min-h-[900px] items-center h-[75vh] md:h-auto justify-between w-full bg-white">
            <div className="md:w-96 2xl:w-[420px] md:mt-5 mt-20">
                <Image
                    preview={false}
                    // width={200}
                    src="./homepage-logo.png"
                    className="w-40 2xl:w-[420px]"
                />
            </div>
            <div className="flex justify-center items-center">
                <Image
                preview={false}
                src="./mason.png"
                className=""
                />
                   <Image
                preview={false}
                src="./wavy.png"
                className=""
                />
                   <Image
                preview={false}
                src="./other.png"
                className=""
                />
            </div>
        </div>
    );
};

export default HomePage;
