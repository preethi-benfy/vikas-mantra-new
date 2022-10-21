import styles from './style.module.css'

const BlogDates = () => {
    return (
        <>
            <div className={styles.colBg + ' col-md-4'}>

                <h4>Latest Blog</h4>
                <hr />

                <a href=''>BENEFITS OF YOGA FOR SCHOOL STUDENTS</a>
                <p className='greyText'>26-July-2022</p>

                <a href=''>TEACHING ECO-FRIENDLY PRACTICES TO CHILDREN</a>
                <p className='greyText'>26-July-2022</p>

            </div>
        </>
    )
}

export default BlogDates;