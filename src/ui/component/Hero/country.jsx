import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon ,MapPinIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useState} from 'react'


const country = [
    { id: 1, name: 'India' },
    { id: 2, name: 'Italy' },
    { id: 3, name: 'Japan' },
    { id: 4, name: 'Greece' },
    { id: 5, name: 'Thai Land' },
]
export default function country_input () {
    const [query, setQuery] = useState('')
        const [selected, setSelected] = useState(country[1])
        const filteredcountry =
        query === ''
        ? country
        : country.filter((country) => {
        return person.name.toLowerCase().includes(query.toLowerCase())
        })


    return(
        <div className="w-full col-span-4 lg:w-30 bg-white">
            <label className='ml-1 font-pop text-[16px] md:text-[18px] lg:text-[20px]'>Location
                <MapPinIcon className='size-4 float-start m-1 mr-1 lg:mt-[6px]'/>
            <Combobox value={selected} onChange={(value) => setSelected(value)} onClose={() => setQuery('')}>
            <div className="relative">
            <ComboboxInput
                className={clsx(
                'w-full rounded-lg border-transparent bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-dark',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25  lg:text-[16px]'
                )}
                displayValue={(country) =>country?.name}
                onChange={(event) => setQuery(event.target.value)}
            />
            <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                <ChevronDownIcon className="size-4 lg:size-6 fill-dark group-data-[hover]:fill-primary " />
            </ComboboxButton>
            </div>
            <ComboboxOptions
            anchor="bottom"
            transition
            className={clsx(
                'w-[var(--input-width)] rounded-xl border border-white/5 bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:invisible',
                'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0 text-[16px]'
            )}
            >
            {filteredcountry.map((country) => (
                <ComboboxOption
                key={country.id}
                value={country}
                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10  text-[16px]"
                >
                <CheckIcon className="invisible size-4 fill-dark group-data-[selected]:visible" />
                <div className="text-sm/6 text-dark">{country.name}</div>
                </ComboboxOption>
            ))}
            </ComboboxOptions>
        </Combobox>
            </label>
        </div>

    )
}