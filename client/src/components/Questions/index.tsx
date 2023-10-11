"use client"
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
export const Questions: React.FC = () => {
    const [collapsedItems, setCollapsedItems] = useState<{ [key: string]: boolean }>({
        question1: false,
        question2: true,
        question3: true,
        question4: true,
        question5: true,
        question6: true,
        question7: true 
      });

    const handleCollapse = (questionId: string) => {
    setCollapsedItems((prevState) => ({
        ...prevState,
        [questionId]: !prevState[questionId],
    }));
    };
    return(
        <>
            <Box maxWidth="l" className="mb-5 mx-auto">
                <Box className="abt-desc mx-auto">
                    <Typography vraiant="h6" className='font-extrabold my-2 text-tan'>faqs</Typography>
                    <Typography variant="h2" className='text-5xl font-extrabold mb-2 text-butter w-1/3'>Your<span><Typography variant="h2" className="pl-2 text-[#39A9DB] inline">Questions</Typography></span></Typography>
                    <Typography variant="h6" className="text-sm pl-2 text-brownie" paragraph>
                        Here are the things you need to know.
                    </Typography>
                </Box> 
                <Box className="rounded-t-lg border border-tan bg-butter text-brownie">
                    <Typography variant="h2" className="mb-0">
                        <button
                        className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                        type="button"
                        onClick={() => handleCollapse('question1')}
                        data-te-collapse-init
                        data-te-collapse-collapsed={collapsedItems.question1}
                        data-te-target="#collapse1"
                        aria-expanded={!collapsedItems.question1}
                        aria-controls="collapse1"
                        >
                            Can I exchange my order if it&apos;s not the right fit?
                            <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6">
                                    <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </Typography>
                    <Box
                        className={!collapsedItems.question1 ? '' : 'hidden'}
                        data-te-collapse-item
                        data-te-collapse-show={!collapsedItems.question1}
                        id="collapse1"
                        >
                        <Box className="px-5 py-4">
                            <strong className="text-ggreen">We are keen on satisfying my customers. </strong>
                            You can. <code>Terms and conditions apply</code>.
                        </Box>
                    </Box>
                </Box>
                <Box className="border border-t-0 border-neutral-200 bg-butter text-brownie">
                    <Typography variant="h2" className="mb-0">
                        <button className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                            type="button"
                            onClick={() => handleCollapse('question2')}
                            data-te-collapse-init
                            data-te-collapse-collapsed={collapsedItems.question2}
                            data-te-target="#collapse2"
                            aria-expanded={!collapsedItems.question2}
                            aria-controls="collapse2">
                            How do I use the size and style recommendation tool?
                            <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6">
                                    <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </Typography>
                        <Box
                            className={!collapsedItems.question2 ? '' : 'hidden'}
                            data-te-collapse-item
                            data-te-collapse-show={!collapsedItems.question2}
                            id="collapse2"
                            >
                            <Box className="px-5 py-4">
                                <strong className="text-ggreen">We take your measurements at registration.</strong> It is
                                best to get a good tailor to take your measurements, then enter the  
                                details when you register. You can update your measurements when your
                                weight changes to keep us informed.
                            </Box>
                        </Box>
                </Box>
                <Box className="rounded-b-lg border border-t-0 border-neutral-200 bg-butter text-brownie">
                    <Typography variant="h2" className="mb-0" id="">
                        <button className="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] [&[data-te-collapse-collapsed]]:rounded-b-[15px] [&[data-te-collapse-collapsed]]:transition-none"
                            type="button"
                            onClick={() => handleCollapse('question3')}
                            data-te-collapse-init
                            data-te-collapse-collapsed={collapsedItems.question3}
                            data-te-target="#collapse3"
                            aria-expanded={!collapsedItems.question3}
                            aria-controls="collapse3">
                            Can I return a product if I change my mind?
                            <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6">
                                    <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </Typography>
                    <Box
                        className={!collapsedItems.question3 ? '' : 'hidden'}
                        data-te-collapse-item
                        data-te-collapse-show={!collapsedItems.question3}
                        id="collapse3"
                        >
                        <Box className="px-5 py-4">
                            <strong className="text-ggreen">There are criterias for product return.</strong> Be
                            sure to make your return request within 48 hours of purchase.
                            The item to be returned must be in a good state. There should
                            no wear or tear, the item must not be dirty or damaged in any shape
                            or form. Upon successful return, you will be refunded.
                        </Box>
                    </Box>
                </Box>
                <Box className="border border-t-0 border-neutral-200 bg-butter text-brownie">
                    <Typography variant="h2" className="mb-0">
                        <button className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                            type="button"
                            onClick={() => handleCollapse('question4')}
                            data-te-collapse-init
                            data-te-collapse-collapsed={collapsedItems.question4}
                            data-te-target="#collapse4"
                            aria-expanded={!collapsedItems.question4}
                            aria-controls="collapse4">
                            How do I use the size and style recommendation tool?
                            <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6">
                                    <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </Typography>
                    <Box
                        className={!collapsedItems.question4 ? '' : 'hidden'}
                        data-te-collapse-item
                        data-te-collapse-show={!collapsedItems.question4}
                        id="collapse4"
                    >
                        <Box className="px-5 py-4">
                            <strong className="text-ggreen">In the case of tailor-to-fit designs.</strong> We have
                            made provision for you to upload your style image in your request
                            form. You can also add other necessary details. When your request
                            is received, you will be contacted for further detailing and 
                            pricing, which is to foster a good understanding of what is to be done.
                        </Box>
                    </Box>
                </Box>
                <Box className="border border-t-0 border-neutral-200 bg-butter text-brownie">
                    <Typography variant="h2" className="mb-0">
                        <button className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                            type="button"
                            onClick={() => handleCollapse('question5')}
                            data-te-collapse-init
                            data-te-collapse-collapsed={collapsedItems.question5}
                            data-te-target="#collapse5"
                            aria-expanded={!collapsedItems.question5}
                            aria-controls="collapse5">
                            When can I expect my refund?
                            <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6">
                                    <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </Typography>
                    <Box
                        className={!collapsedItems.question5 ? '' : 'hidden'}
                        data-te-collapse-item
                        data-te-collapse-show={!collapsedItems.question5}
                        id="collapse5"
                    >
                        <Box className="px-5 py-4">
                            <strong className="text-ggreen">Almost immediately.</strong>
                            We will provide a refund immediately upon the return of the product
                            However, bank providers may take 3 to 10 business days to process
                            the refund into the original mode of payment.
                        </Box>
                    </Box>
                </Box>
                <Box className="border border-t-0 border-neutral-200 bg-butter text-brownie">
                    <Typography variant="h2" className="mb-0">
                        <button className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                            type="button"
                            onClick={() => handleCollapse('question6')}
                            data-te-collapse-init
                            data-te-collapse-collapsed={collapsedItems.question6}
                            data-te-target="#collapse6"
                            aria-expanded={!collapsedItems.question1}
                            aria-controls="collapse6">
                            Can I change my delivery address?
                            <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6">
                                    <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </Typography>
                    <Box
                    className={!collapsedItems.question6 ? '' : 'hidden'}
                    data-te-collapse-item
                    data-te-collapse-show={!collapsedItems.question6}
                    id="collapse6"
                    >
                        <Box className="px-5 py-4">
                            <strong className="text-ggreen">Yes, you can.</strong> It is
                            best to change the address before the delivery process begins.
                            Before your order is been delivered, you will be contacted to
                            verify your order and the delivery details.
                        </Box>
                    </Box>
                </Box>
                <Box className="border border-t-0 border-neutral-200 bg-butter text-brownie">
                    <Typography variant="h2" className="mb-0">
                        <button className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                            type="button"
                            onClick={() => handleCollapse('question7')}
                            data-te-collapse-init
                            data-te-collapse-collapsed={collapsedItems.question7}
                            data-te-target="#collapse7"
                            aria-expanded={!collapsedItems.question7}
                            aria-controls="collapse7">
                            Can I return my order if I change my mind?
                            <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6">
                                    <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </span>
                        </button>
                    </Typography>
                    <Box
                        className={!collapsedItems.question7 ? '' : 'hidden'}
                        data-te-collapse-item
                        data-te-collapse-show={!collapsedItems.question7}
                        id="collapse7"
                    >
                        <Box className="px-5 py-4">
                            <strong className="text-ggreen">Yes. Terms and conditions apply. </strong>
                            There is room for returning your order, but provided that the product 
                            has issues. Because of the sensivity of clothing and other fashion
                            items, returning an order wil be possible only when there is 
                            an issue with the product.
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}