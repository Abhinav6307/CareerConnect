import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { motion } from 'framer-motion';


// const randomJobs = [1, 2,3,4];

const Browse = () => {
    useGetAllJobs();
    const dispatch = useDispatch();
    const {allJobs, searchedQuery } = useSelector(store=>store.job);
    
    useEffect(()=>{
        return ()=>{
            dispatch(setSearchedQuery(""));
        }
    },[])

    const filteredJobs = searchedQuery
        ? allJobs.filter(job =>
            job.title.toLowerCase().includes(searchedQuery.toLowerCase())
        )
        : allJobs;

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto my-10'>
                <h1 className='font-bold text-xl my-10'>Search Results ({filteredJobs.length})</h1>
                <div className='grid grid-cols-3 gap-4'>
    {
        filteredJobs.map((job) => (
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                key={job._id}
            >
                <Job job={job} />
            </motion.div>
        ))
    }
</div>


            </div>
        </div>
    )
}

export default Browse