import {Input} from "@/components/ui/input";

export default function Page() {
    return (
        <main>
            <h1 className={`mb-4 text-xl md:text-2xl`}>
                Investments
            </h1>
            <div>
                <Input type="text" placeholder="Search Investment Opportunities" />
            </div>
        </main>
    );
}