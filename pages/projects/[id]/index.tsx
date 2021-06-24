import ProjectDetails from "../../../components/ProjectView/ProjectDetails";
import ProjectView from "../../../components/ProjectView/ProjectView";

const ProjectPage = (): React.ReactElement => {
    return (
        <>
            <ProjectView projectId={1}>
                <>
                    <h2 className="lbh-heading-h2">Description</h2>
                    <p className="lbh-body-m">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies sit amet augue non pharetra. In pulvinar turpis semper risus lobortis finibus. In mauris enim, auctor vehicula justo in, gravida laoreet erat. Vestibulum volutpat nec ipsum at ultrices. In ac mauris nec magna aliquet dictum et sed quam. Vivamus nec gravida odio. Mauris ac nunc id ipsum tempus interdum eget a mi. In feugiat tellus vitae bibendum consequat.<br /><br />
                        Donec ligula sem, sagittis a imperdiet sit amet, posuere in eros. Morbi nec magna non diam pellentesque blandit. Suspendisse at lectus non sem egestas congue. Morbi eleifend dictum risus iaculis pulvinar. Nulla non felis dictum, semper nisl vel, vestibulum augue. Nam quis massa quis risus bibendum accumsan. Aenean vehicula auctor libero vestibulum commodo. Pellentesque pellentesque leo neque, ut elementum orci imperdiet sed. Duis eu tellus in mi auctor pretium. Nulla ut ipsum at ligula iaculis rhoncus. Nulla dui erat, consectetur a laoreet quis, luctus non nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer tincidunt a odio ac ullamcorper. In consequat molestie neque, vel tristique erat sodales eu. <br /><br />
                        Ut magna leo, aliquet quis quam id, aliquam faucibus orci. Praesent et auctor risus. Nunc id orci sed ligula aliquet vulputate eget vel arcu. Sed et est sed elit scelerisque interdum. Nullam pellentesque ornare nulla eu dictum. Curabitur suscipit placerat nunc a hendrerit. Integer finibus quis nulla eget condimentum. Aenean faucibus mi mi, tristique efficitur tortor vestibulum quis. Ut dapibus massa sed metus sodales posuere. Praesent eget pellentesque ligula. Proin nec ex non magna dapibus sagittis ut et lacus. Duis non leo eget urna ultrices dapibus.
                    </p>
                    <ProjectDetails></ProjectDetails>
                </>
            </ProjectView>
        </>
    );
};

export default ProjectPage;